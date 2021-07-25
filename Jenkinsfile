pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://localhost:8081'
    }
    stages {
        stage('Build') { 
            steps { 
                sh(script: 'npm i')
                sh(script: 'npm run build')
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
