# JavaScript new Keyword
Testando como funciona a keyword new com funções no JavaScript seguindo o vídeo do mpj: https://www.youtube.com/watch?v=Y3zzCY62NYc

Para entender profundamente como a keyword new funciona vamos criar nossa própria implementação de new que faz exatamente a mesma coisa.

A keyword new executa os seguintes passos:

- Cria um novo objeto.
- Define o protótipo do objeto para a função passada como parâmetro.
- Aplica os argumentos recebidos ao construtor da função.
- Retorna o retorno da função (situação estranha mas as vezes a função pode ter um retorno por algum motivo) ou o objeto que foi criado ( situação mais comum ).

# Testando o exemplo

 - Instale o NodeJS na sua máquina: https://nodejs.org/en/
 - Baixe os arquivos (clone ou download do projeto no GitHub)
 - Vá até a pasta onde você baixou os arquivos.
 - Clique com o botão direito segurando shift na pasta e clique em Abrir janela de comando aqui.
 - Digite node newkeyword.js.

