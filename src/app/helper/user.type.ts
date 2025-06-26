export type UserProps = {
     ID: string;
     Account: string;
     Provider: string;
     ProviderID: string;
     Email: string;
     Phone: string;
     Name: string;
     Address: string;
     AvatarURL: string;
     role: string[];
     IsVerified: boolean;
     IsVerifiedExpires: null;
    CreatedAt: Date;
};
