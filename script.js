


    function abrirAba(id) {
        var aba = document.getElementById(id);
        var conteudo = aba.querySelector('.conteudo-aba');
        var botoes = document.querySelectorAll('.botao-aba');
      
        botoes.forEach(function(botao) {
          botao.classList.remove('ativo');
        });
      
        aba.querySelector('.botao-aba').classList.add('ativo');
      
        var conteudos = document.querySelectorAll('.conteudo-aba');
        conteudos.forEach(function(conteudo) {
          conteudo.classList.remove('ativo');
        });
      
        conteudo.classList.add('ativo');
      }
