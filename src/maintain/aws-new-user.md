## AWS New User

As it is not recommended to use access key of root user to perform automated deployment, we should create a new user in AWS IAM.

Login with the root user and select [IAM] from the [services] menu.

![aws iam](../images/maintain/aws_iam.png)

Use [Add users] to create new users.

![aws iam1](../images/maintain/aws_iam1.png)

Specify [User name] and check on [Access key], go to [Next].

![aws iam2](../images/maintain/aws_iam2.png)

Create a new group with policy [AdministratorAccess] if it is not existed.

![aws iam3](../images/maintain/aws_iam3.png)

Select [Add user to group] and check on the new created group with attached policies [AdministratorAccess]. Go to [Next].

![aws iam4](../images/maintain/aws_iam4.png)

Complete the following steps and create the user.

![aws iam5](../images/maintain/aws_iam5.png)

Remember to download and store the csv file properly. It contains the access key id and the secret access key that will be used in following actions.

![aws iam6](../images/maintain/aws_iam6.png)
