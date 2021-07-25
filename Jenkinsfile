pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://localhost:8081'
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Build Auth') { 
            when {
                changeset "react-auth/**"
            }
            steps {
                dir('react-auth') {  
                    echo "auth app ...."
                    bat 'git pull origin master'
                    bat 'npm i'
                    bat 'npm run build'
                }
            }
        }
        stage('Build Header') { 
            when {
                changeset "react-header/**"
            }
            steps {
                dir('react-header') {  
                    echo "header app ...."
                    bat 'git pull origin master'
                    bat 'npm i'
                    bat 'npm run build'
                }
            }
        }
        stage('Build Shell') { 
            when {
                changeset "webc-container/**"
            }
            steps {
                dir('webc-container') {  
                    echo "shell app ...."
                    bat 'git pull origin master'
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
