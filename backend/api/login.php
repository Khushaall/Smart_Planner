<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// DB Connection
$host = "localhost";
$user = "root";
$pass = "";
$db   = "project";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "DB connection failed"]));
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email'], $data['password'])) {
    echo json_encode(["status" => "error", "message" => "Missing fields"]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$password = $data['password'];

// Check user
$result = $conn->query("SELECT * FROM users WHERE email='$email' LIMIT 1");
if ($result->num_rows === 0) {
    echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
    exit;
}

$user = $result->fetch_assoc();

// Verify password
if (!password_verify($password, $user['password'])) {
    echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
    exit;
}

// ---- JWT Token Generation ----
$header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
$payload = json_encode([
    'id' => $user['id'],
    'email' => $user['email'],
    'name' => $user['name'],
    'iat' => time(),
    'exp' => time() + (60 * 60) // expires in 1 hour
]);

$base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
$base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

$secret = "f8a6b4e2d71c9a34e5b2c0a8d4f71e9c82a14f5d7396b1c0d8f4a9b2c3e5f7a1"; // save this secret securely
$signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
$base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

$jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

// Return success
echo json_encode([
    "status" => "success",
    "message" => "Login successful",
    "token" => $jwt
]);
?>
