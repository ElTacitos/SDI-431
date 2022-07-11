# diagram.py
from diagrams import Cluster, Diagram
from diagrams.custom import Custom
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB
from diagrams.aws.compute import Lambda
from diagrams.aws.network import APIGateway
from diagrams.aws.network import CF
from diagrams.aws.storage import S3

with Diagram("TD-SDI Architecture"):

    with Cluster("AWS"):
        apiGateway = APIGateway("API Gateway")
        strapi = EC2("Strapi")
        storeFront = S3("StoreFront")
        startStrapi = Lambda("Start Strapi")
        stopStrapi = Lambda("Stop Strapi")

        apiGateway - startStrapi - strapi
        apiGateway - stopStrapi - strapi


        cloudFront = CF("CloudFront")
        cloudFront - storeFront

    githubAction = Custom("Github Action", "./github-action.png")
    adminFront = Custom("admin.sdi.all-rights.fr", "./computer.png")
    storePortal = Custom("sdi.all-rights.fr", "./computer.png")

    strapi - githubAction - storeFront
    apiGateway - adminFront - strapi
    cloudFront - storePortal
