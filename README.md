# Serviço de Disparo de Emails

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)


Este projeto foi desenvolvido com o objetivo principal é demonstrar o uso do banco de dados NoSQL Redis como message broker em um sistema de disparo de e-mails em lote.

Este projeto é um clone do repositório [redis-dba](https://github.com/guivahl/redis-dba), com algumas adições de funcionalidades.

## Tecnologias Utilizadas

- [Redis](https://redis.io/) - Banco de dados NoSQL para armazenar as mensagens em filas
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript do lado do servidor
  - [Bull](https://github.com/OptimalBits/bull) - Biblioteca para manipulação de filas de mensagens utilizando Redis
  - [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property) - SDK da AWS para envio de e-mails utilizando o serviço Simple Email Service (SES)

