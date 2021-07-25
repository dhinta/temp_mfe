pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://localhost:8081'
    }
    stages {
        stage('Build') { 
            steps { 
                pwsh(script: 'npm i')
                pwsh(script: 'npm run build')
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
