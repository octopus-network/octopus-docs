## Node Instance Operations

For the validator node's instance which was deployed via the automatic deployment service, if it needs more storage space etc., the validator can do some operations with the following documents.

| Operations | AWS  | Digital Ocean |
|------|------|------|
| Upgrade Storage | [Amazon EBS Elastic Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html)  | [How to Increase the Size of DigitalOcean Block Storage Volumes](https://docs.digitalocean.com/products/volumes/how-to/increase-size/) |
| Change Instance | [Change the instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)  | [How to Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/) |
| Reboot Instance | [Reboot your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-reboot.html)  | [Connect to Droplets with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/) and run the command: sudo reboot |


> **Notes**
> For Digital Ocean, the validator can get the Droplet's default password from an email sent by DigitalOcean Support. 