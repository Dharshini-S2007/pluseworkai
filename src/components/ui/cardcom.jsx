import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CardDemo({ onLoginSuccess, onSignUp }) {

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter your email and password.");
            return;
        }

        alert("Login successful!");

        if (onLoginSuccess) {
            onLoginSuccess();
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4">

            <Card className="w-full max-w-md rounded-2xl border-0 shadow-2xl">

                <CardHeader className="space-y-2 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-3xl text-white">
                        ✦
                    </div>

                    <CardTitle className="text-3xl font-bold text-indigo-950">
                        Welcome Back!
                    </CardTitle>

                    <CardDescription>
                        Login to your PulseWorks-AI account.
                    </CardDescription>

                </CardHeader>

                <CardContent>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="space-y-2">
                            <Label>Email Address</Label>

                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">

                            <Label>Password</Label>

                            <div className="relative">

                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pr-16"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2 text-sm font-medium text-indigo-600"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>

                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 py-6 text-base font-semibold hover:bg-indigo-700"
                        >
                            Login →
                        </Button>

                    </form>

                </CardContent>

                <CardFooter className="justify-center">

                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}

                        <button
                            onClick={onSignUp}
                            className="font-semibold text-indigo-600 hover:underline"
                        >
                            Sign Up
                        </button>
                    </p>

                </CardFooter>

            </Card>

        </div>
    );
}

export default CardDemo;