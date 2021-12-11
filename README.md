# buyemall-micro-frontend

## Table of Content

1.) [AWS IAM Configuration](#aws_iam_configuration)
2.) [AWS S3 Configuration](#aws_s3_configuration)
3.) [AWS Cloudfront Distribution Configuration](#aws_cloudfront_distribution_configuration)
4.) [Github Configuration](#github_configuration)

## AWS IAM Configuration

**Create S3 bucket**: AWS Management Console > Find Services - IAM > Users > Add users

- **User name**: buyemall-mf-github-action
- **Access key - Programmatic access**: check
- **Password - AWS Management Console access**: Uncheck
- Permissions > Attach existing policies directly
  AmazonS3FullAccess
  CloudFrontFullAccess
- Next > Create user
- Copy access keys

## AWS S3 Configuration

**Create S3 bucket**: Create an AWS Account > AWS Management Console > Find Services - S3

- **Bucket name**: buyemall-micro-frontend
- **Region**:
- **Uncheck Block all public access**: Uncheck
- Create bucket

**Configure Static Website Hosting**: Go to new bucket > Properties Tab > Static website hosting > Edit

- **Static website hosting**: check enable bucket
- **Hosting type**: Host a static website
- **Index document**: index.html
- **Error document**: index.html
- Save changes

**Configure Bucket Policy**: Go to new bucket > Permissions Tab > Bucket policy > Edit > policy generator
**Select Type of Policy**: S3 Bucket Policy
**Effect**: Allow
**Principal**: asterisk
**AWS Service**: Amazon S3
**Actions**: [GetObject]
**ARN**: `${your S3 buckets ARN}/asterisk`
Add Statement
Generate Policy
Copy all the generated text and past into Policy text editor
Save changes

## AWS Cloudfront Distribution Configuration

**Create a Cloudfront Distribution**: AWS Management Console > Find Services - Cloudfront > Create a Cloudfront distribution

- Origin
  **Origin domain**: buyemall-micro-frontend.s3.eu-west-2.amazonaws.com
- Default cache behavior
  **Viewer Protocol Policy**: Redirect HTTP to HTTPS
- Create distribution

**Default root object**: AWS Management Console > Find Services - Cloudfront > Select a distribution > General

- Settings
  **Default root object**- optional: /container/latest/index.html
  Save changes

**Create custom error response**: Cloudfront > Select a distribution > Error pages > Create custom error response

**HTTP error code**: 403: Forbidden
**Customize error response**: Yes
**Response page path**: /container/latest/index.html
**HTTP Response code**: 200: OK
Create custom error response

## Github Configuration

\*Re-running a build\*\*: On Github repo > Actions > Click on the failed workflow > Re-run all jobs
