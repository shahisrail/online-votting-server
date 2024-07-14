

export type Tuser = {
    id: string;
    role: "admin" |  "servay" | "NormalUser"
    password: string;
    status: "in-progress" | "blocked"
    passwordChange?:Date;
    isDeleted: boolean;
};

