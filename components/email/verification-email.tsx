
import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Button,
  Link,
  Hr,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
  userName: string
  verificationUrl: string
}

const VerificationEmail = (
  { userName, verificationUrl }: VerificationEmailProps
) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto">
            {/* Header with Logo */}
            <Section className="text-center py-[32px] px-[40px]">
              <Img
                src="https://new.email/static/app/placeholder.png"
                alt="Company Logo"
                className="w-[120px] h-auto mx-auto mb-[24px]"
              />
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[16px]">
                Verify Your Email Address
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="px-[40px] pb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Hello {userName},
              </Text>
              
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Thank you for signing up! To complete your registration and secure your account, 
                please verify your email address by clicking the button below.
              </Text>

              {/* Verification Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border hover:bg-blue-700"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                If the button above doesn&apos;t work, you can also click on this link or copy and paste it into your browser:
              </Text>

              {/* Verification Link */}
              <Text className="text-[14px] mb-[24px]">
                <Link
                  href={verificationUrl}
                  className="text-blue-600 underline break-all"
                >
                  {verificationUrl}
                </Link>
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                This verification link will expire in 24 hours for security purposes.
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                If you didn&apos;t create an account with us, please ignore this email or contact our support team.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px]">
                Best regards,<br />
                The Support Team
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[24px]" />

            {/* Footer */}
            <Section className="px-[40px] pb-[32px] text-center">
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                123 Business Street, Suite 100, City, State 12345
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                <Link href="#" className="text-gray-500 underline">
                  Unsubscribe
                </Link>
                {" | "}
                <Link href="#" className="text-gray-500 underline">
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;