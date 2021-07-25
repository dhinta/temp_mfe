pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://localhost:8081'
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Build') { 
            steps {
                dir('react-auth') {  
                    bat 'git pull origin master'
                    bat 'npm run build'
                }
                dir('react-header') {  
                    bat 'git pull origin master'
                    bat 'npm run build'
                }
                dir('webc-container') {  
                    bat 'git pull origin master'
                    bat 'npm run build'
                }
            }
        }
        stage('Test'){
            steps {
                echo "unit testing ...."
            }
        }
        stage('Deploy') {
            steps {
                echo "deploy"
            }
        }
    }
}
