pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://localhost:8081'
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'echo "whoam"'
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
