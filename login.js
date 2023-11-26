// Função para calcular o hash MD5
function md5(str) {
    var crypto = require('crypto');
    return crypto.createHash('md5').update(str).digest('hex');
}

// Função para verificar a senha
function submitForm() {
    var passwordInput = document.getElementById('password').value;
    var hashedPassword = md5(passwordInput);

    // Substitua a senha hashed apropriada para a verificação
    var correctHashedPassword = '5f4dcc3b5aa765d61d8327deb882cf99'; // 'password' hashed with MD5

    if (hashedPassword === correctHashedPassword) {
        document.getElementById('message').innerHTML = 'Login Successful!';
    } else {
        document.getElementById('message').innerHTML = 'Incorrect Password. Try again.';
    }
}