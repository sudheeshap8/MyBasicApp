- Docker steps

* docker build --tag my-tag .
* docker run my-tag
* docker run -p 4000:9000 --name hallo -d my-tag

- Use with Jenkins

https://www.jenkins.io/doc/book/installing/docker/

- docker pull jenkins/jenkins
- docker network create jenkins
