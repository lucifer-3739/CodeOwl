
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

interface PasswordResetEmailProps {
  userName: string
  resetUrl: string
  requestTime: string
}

const ForgotPasswordEmail = ({ userName, resetUrl, requestTime }: PasswordResetEmailProps) => {


  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto">
            {/* Header with Logo */}
            <Section className="text-center py-[32px] px-[40px]">
              <Img
                src="/logo.png"
                alt="Company Logo"
                className="w-[120px] h-auto mx-auto mb-[24px]"
              />
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[16px]">
                Reset Your Password
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="px-[40px] pb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Hello {userName},
              </Text>
              
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                We received a request to reset your password for your account. If you made this request, 
                click the button below to create a new password.
              </Text>

              {/* Reset Password Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border hover:bg-red-700"
                >
                  Reset Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                If the button above doesn&apos;t work, you can also click on this link or copy and paste it into your browser:
              </Text>

              {/* Reset Link */}
              <Text className="text-[14px] mb-[24px]">
                <Link
                  href={resetUrl}
                  className="text-red-600 underline break-all"
                >
                  {resetUrl}
                </Link>
              </Text>

              {/* Security Information */}
              <Section className="bg-yellow-50 border-l-[4px] border-yellow-400 p-[16px] mb-[24px]">
                <Text className="text-[14px] text-yellow-800 leading-[20px] m-0 mb-[8px] font-semibold">
                  Important Security Information:
                </Text>
                <Text className="text-[14px] text-yellow-700 leading-[20px] m-0 mb-[4px]">
                  • This password reset link will expire in {requestTime}
                </Text>
                <Text className="text-[14px] text-yellow-700 leading-[20px] m-0 mb-[4px]">
                  • The link can only be used once
                </Text>
                <Text className="text-[14px] text-yellow-700 leading-[20px] m-0">
                  • If you didn&apos;t request this, please ignore this email
                </Text>
              </Section>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                If you didn&apos;t request a password reset, you can safely ignore this email. 
                Your password will remain unchanged. If you&apos;re concerned about your account security, 
                please contact our support team immediately.
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                For your security, we recommend choosing a strong password that includes a mix of 
                letters, numbers, and special characters.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px]">
                Best regards,<br />
                The Security Team
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
                  Contact Support
                </Link>
                {" | "}
                <Link href="#" className="text-gray-500 underline">
                  Privacy Policy
                </Link>
                {" | "}
                <Link href="#" className="text-gray-500 underline">
                  Security Center
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;
