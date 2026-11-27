import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Signup({ onBackToLogin }) {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            alert("Please fill in all fields.");
            return;
        }

        if (formData.password.length < 8) {
            alert("Password must contain at least 8 characters.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Account created successfully!");
        onBackToLogin();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4">
            <Card className="w-full max-w-md rounded-2xl border-0 shadow-2xl">
                <CardHeader className="space-y-2 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-3xl text-white">
                        ✦
                    </div>

                    <CardTitle className="text-3xl font-bold text-indigo-950">
                        Create Account
                    </CardTitle>

                    <CardDescription>
                        Join PulseWorks-AI and manage your work smarter.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Password</Label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="pr-16"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2 text-sm text-indigo-600"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Confirm Password</Label>
                            <Input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 py-6 text-base font-semibold hover:bg-indigo-700"
                        >
                            Create Account →
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={onBackToLogin}
                            className="font-semibold text-indigo-600 hover:underline"
                        >
                            Login
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Signup;