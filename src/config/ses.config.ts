/* eslint-disable @typescript-eslint/no-explicit-any */
// import AWS from "aws-sdk";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const secKey = "1+kJKlfZAXrWZCOGVqS3G4ULl05BJDr83gK071FL";
const accKey = "AKIAWEFZ7EBX3EJXQHWK";

// export const testEmail = () => {
//   const ses = new SESv2Client({
//     region: "us-east-1",
//     // here
//     credentials: {
//       accessKeyId: accKey,
//       secretAccessKey: secKey,
//     },
//   });

//   try {
//     const input = {
//       TemplateName: "User-Notification", // required
//       TemplateContent: {
//         Subject: "Kopek Networks",
//         Text: "Hello From Kopek Networks",
//         Html: `<div>
//   <div>
//     <h1>Hello, {{firstName}}</h1>
//   </div>
//   <div>
//     <p>Thank you for contacting Kopek Networks</p>
//   </div>
//   <div>
//     <p>We have received your message and will reach out to you shortly</p>
//   </div>
//   <br />
//   <br />
//   <div>
//     <p>Warm Regards</p>
//     <p>The Kopek Networks Team</p>
//   </div>
// </div>

// `,
//       },
//     };
//     ses.createEmailTemplate(input, (err, data) => {
//       console.log({ err, data });
//     });
//   } catch (error) {
//     console.log(error);
//     console.log("error......");
//   }
// };

export const sendEmail = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}: any) => {
  // hey
  const ses = new SESv2Client({
    region: "us-east-1",
    // here
    credentials: {
      accessKeyId: accKey,
      secretAccessKey: secKey,
    },
  });
  // blink

  try {
    const templateName = "Admin-Notification-3";
    const emailDestination = "info@kopeknetworks.com";
    const templateData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    const params = {
      FromEmailAddress: "Kopek Networks <info@kopeknetworks.com>",
      Destination: {
        ToAddresses: [emailDestination],
      },
      Content: {
        Template: {
          TemplateName: templateName,
          TemplateData: JSON.stringify(templateData),
        },
      },
      // ConfigurationSetName: "ConfigSet",
    };
     const command = new SendEmailCommand(params);

     const data = await ses.send(command);

    console.log(data);
    console.log("data.....");
  } catch (error) {
    console.log(error);
    console.log("error......");
  }
};

export const sendUserEmail = async ({ firstName, email }: any) => {
  // hey
  const ses = new SESv2Client({
    region: "us-east-1",
    // here
    credentials: {
      accessKeyId: accKey,
      secretAccessKey: secKey,
    },
  });
  // blink

  try {
    const templateName = "User-Notification";
    const emailDestination = email;
    const templateData = {
      firstName,
    };

    const params = {
      FromEmailAddress: "Kopek Networks <info@kopeknetworks.com>",
      Destination: {
        ToAddresses: [emailDestination],
      },
      Content: {
        Template: {
          TemplateName: templateName,
          TemplateData: JSON.stringify(templateData),
        },
      },
    };
      
      const command = new SendEmailCommand(params);


    const data = await ses.send(command);

    console.log(data);
    console.log("data.....sendUserEmail");
  } catch (error) {
    console.log(error);
    console.log("error......sendUserEmail");
  }
};
