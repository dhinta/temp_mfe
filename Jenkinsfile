pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://localhost:8081'
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Build micro apps') {
            parallel {
                stage('Build Auth') { 
                    when {
                        changeset "react-auth/**"
                    }
                    steps {
                        dir('react-auth') {  
                            echo "auth app ...."
                            bat 'git pull origin master'
                            // bat 'npm i'
                            bat 'npm run build'
                            bat 'tar czf auth.tar.gz dist'
                        }
                    }
                    post {
                        failure {
                            echo 'auth app build failed'
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
                            // bat 'npm i'
                            bat 'npm run build'
                            bat 'tar czf header.tar.gz dist'
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
                            // bat 'npm i'
                            bat 'npm run build'
                            bat 'tar czf shell.tar.gz dist'
                        }
                    }
                }
            }
        }        
        stage('Test') {
            steps {
                echo "unit testing ...."
            }
        }
        stage('Deploy micro apps') {
            stages {
                stage('Deploy Auth') {
                    when {
                        changeset 'react-auth/**'
                    }
                    steps {
                        echo "unit testing ...."
                    }
                }
            }
        }
    }
}
