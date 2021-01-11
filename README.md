# Projeto backend com Serverless Framework

Utiliza Servesless framework<br/>
AWS como providor dos serviços cloud<br/>
MySQL para banco de dados


## Detalhamento do projeto
* Definição dos endpoint nas pasta handlersYML
* Implementação dos endpoint em src/handlers 
* Configuração de provider em serveless.yml 

## Comandos 
* Deploy de todo o projeto na AWS
```
sls deploy
```

* Deploy de apenas uma function na AWS
```
sls deploy function -f <Nome da função>
```

* Execução local do entpoint
```
sls invoke local --function <Nome da função>   
```

* Remover todos os recursos da AWS
```
sls remove -v
```