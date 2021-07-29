pipeline { 
    agent any 
    environment { 
        DOMAIN = 'http://mono-local-temp.s3-website.ap-south-1.amazonaws.com/'
        S3_PATH = 's3://mono-local-temp'
        AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
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
                            // bat 'tar czf auth.tar.gz dist'
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
                            // bat 'tar czf header.tar.gz dist'
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
                            // bat 'tar czf shell.tar.gz dist'
                        }
                    }
                }
            }
        }        
        stage('Test') {
            steps {
                echo '$S3_PATH'
            }
        }
        stage('Deploy micro apps') {
            stages {
                stage('Deploy Auth') {
                    when {
                        changeset 'react-auth/**'
                    }
                    steps {
                        dir('react-auth') {
                            // bat 'aws s3 rm ${S3_PATH}/auth/auth.tar.gz'
                            // bat 'aws s3 cp ./auth.tar.gz ${S3_PATH}/auth.tar.gz'

                            bat 'aws s3 rm ${S3_PATH}/auth --recursive'
                            bat 'aws s3 cp ./dist ${S3_PATH}/auth --recursive'
                        }
                    }
                }
                stage('Deploy header') {
                    when {
                        changeset 'react-header/**'
                    }
                    steps {
                        dir('react-header') {
                            // bat 'aws s3 rm ${S3_PATH}/header/header.tar.gz'
                            // bat 'aws s3 cp ./auth.tar.gz ${S3_PATH}/header/header.tar.gz'

                            bat 'aws s3 rm ${S3_PATH}/header --recursive'
                            bat 'aws s3 cp ./dist ${S3_PATH}/header --recursive'
                        }
                    }
                }
                stage('Deploy shell') {
                    when {
                        changeset 'webc-container/**'
                    }
                    steps {
                        dir('webc-container') {
                            // bat 'aws s3 rm ${S3_PATH}/shell/header.tar.gz'
                            // bat 'aws s3 cp ./auth.tar.gz ${S3_PATH}/shell/header.tar.gz'

                            bat 'aws s3 rm ${S3_PATH}/shell --recursive'
                            bat 'aws s3 cp ./dist ${S3_PATH}/shell --recursive'
                        }
                    }
                }
            }
        }
    }
}
