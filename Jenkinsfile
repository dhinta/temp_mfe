pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://localhost:8081'
    }
    stages {
        stage('Build') { 
            steps {
                dir('react-auth') {  
                    bat 'git pull'
                    bat 'npm i'
                    bat 'npm run build'
                }
                dir('react-header') {  
                    bat 'git pull'
                    bat 'npm i'
                    bat 'npm run build'
                }
                dir('webc-container') {  
                    bat 'git pull'
                    bat 'npm i'
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
