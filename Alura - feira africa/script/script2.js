document.getElementById('form-cadastro').addEventListener('submit',function(e){e.preventDefault();

    const senha = this.senha.value;
    const confimarSenha = this.confimarSenha.value;

    if(senha !== confimarSenha){
        alert('As senhas não coincidem!');
    } else{
        alert('Cadastro concluido com sucesso!')
    }
});

function abrirModal(){

    document.getElementById("modal").style.display="flex";
}

function fecharModal(){

    document.getElementById("modal").style.display="none";
}

function confirmarcancelamento(){
    alert("Registo cancelado.");

    //Redirecionar ou limpar formulário

    window.location.reload();

    /*Voltar a página inicial
    window.location.href='index,html;*/
}

// Registro
    document.getElementById("form-registro").addEventListener("submit", async (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email-reg").value;
      const senha = document.getElementById("senha-reg").value;

      try {
        const response = await fetch("https://alura-6i3v.onrender.com/auth/register/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, senha })
        });
        const data = await response.json();
        if (response.ok) {
          alert("Registro feito com sucesso!");
        } else {
          alert("Erro: " + (data.message || "Falha ao registrar."));
        }
      } catch (error) {
        alert("Erro ao conectar com o servidor.");
        console.error(error);
      }
    });

    // Login
    document.getElementById("form-login").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      try {
        const response = await fetch("https://alura-6i3v.onrender.com/auth/login/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha })
        });
        const data = await response.json();
        if (response.ok) {
          alert("Login realizado com sucesso!");
          // Aqui você pode salvar um token ou redirecionar
        } else {
          alert("Erro: " + (data.message || "Falha ao fazer login."));
        }
      } catch (error) {
        alert("Erro ao conectar com o servidor.");
        console.error(error);
      }
    });
