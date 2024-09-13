# Architecture ForBackend

- Client  --> Backend Infrastructure
- Server are get the data from backend and send back to client
- Client --> Loadbalancer (AWS Elastic LoadBalancer) --> horizontal scalled server. + database


E-Commerse
- catalog
- payments
- Reviews
- seller

In Devali Sale --> 10M user watch the catalog --> Among them 1M user buy (Payment) --> Among them 100000 give reviews

## MONOLITH ARCHITECTURE - 
In monolith architecture, the whole application backend is in one folder.
Advatages - 1. Easy to maintain. 2. Easy to debug
Example of monolith architecture - Stakeoverflow 

![Monolith](./Images/monolythic-service.png)

## Microservice Architecture
- In microservice architecture, the whole application backend is in multiple folder.
- One repo for payment, catalog, reviews, seller.
- Avantage - 

1. We can use diff programming language in diffret folder. 
2. Every logical folder is called microservice. 
3. Easy to scale each microservice as much or low we want for change in userbase.
4. Each microservise has its own load balancer.
5. Each microservice may have its own database and maybe all services use one common database. 
6. All services are independent they talk with each other using api and load balancer.

![Microservice](./Images/microservice.png)

- Disadvantage -
1. Added latency because to intract with each other they will do network call.


## Design Backend Infrastructure of Facebook Messanger/Whatsapp

### Functional Requirement
- 1:1 Chat
- Group Chat
- Support web and mobile
- Only text message support
- Not support E2E
- No video call or image, voice support.
- Strore the chat history
- One message can be of maximum 10^5 character
- Limit on gropup size.
- Online and Offline tag.
- User get message when online.

### Non Functional Requirement (Behavioural)
- Application should be scalable.
- No loss of message.

### Simple example -
