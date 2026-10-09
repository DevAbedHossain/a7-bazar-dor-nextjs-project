import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from 'resend';

const mongodbUrl = process.env.MONDODB_URL;
if (!mongodbUrl) {
    throw new Error("MONDODB_URL environment variable is required");
}
const client = new MongoClient(mongodbUrl);
const db = client.db("bazar_dor_user");
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    // emailVerification: {
    //     sendVerificationEmail: async ({ user, url }) => {
    //         void resend.emails.send({
    //             from: 'Acme <onboarding@resend.dev>',
    //             to: user.email,
    //             subject: 'Verify your email address',
    //             html: `Click <a href="${url}">here</a> to verify your email.`,
    //         });
    //     },
    //     sendOnSignUp: true,
    //     autoSignInAfterVerification: true,
    //     expiresIn: 7 * 24 * 3600 // 7 days
    // },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    database: mongodbAdapter(db, {
        client,
    }),
});