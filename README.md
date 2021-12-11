# buyemall-micro-frontend

## Table of Content

1.) [AWS S3 Configuration](#aWS_S3_configuration)

## AWS S3 Configuration

Create an AWS Account
AWS Management Console > Find Services - S3
Create bucket"

- Bucket name
- Region
- Uncheck Block all public access
- Create bucket

**Configure static website hosting**: Go to new bucket > Properties Tab > Static website hosting > Edit

- **Static website hosting**: check enable bucket
- **Hosting type**: Host a static website
- **Index document**: index.html
- **Error document**: index.html
- Save changes

**Configure bucket policy**: Go to new bucket > Properties Tab > Bucket policy > Edit > policy generator
**Select Type of Policy**: S3 Bucket Policy
**Effect**: Allow
**Principal**: _
**AWS Service**: Amazon S3
**Actions**: [GetObject]
**ARN**: `${your S3 buckets ARN}/_`
Add Statement
Generate Policy
Copy all the generated text and past into Policy text editor
Save changes
