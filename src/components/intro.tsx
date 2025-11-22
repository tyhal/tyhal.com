import React from "react";
import { Profile } from "../data/profile";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Intro() {
    return (
        <Card className="w-full mt-8 max-w-2xl mx-auto p-4 relative overflow-visible">
            <CardHeader className="p-4 relative">
                {/* Header text */}
                <div>
                    <CardTitle className="text-2xl mb-0">{Profile.name.toUpperCase()}</CardTitle>
                    <CardDescription className="text-sm mb-0 font-mono">{Profile.title.toUpperCase()}</CardDescription>
                </div>

                {/* Avatar positioned absolutely */}
                <Avatar className="w-36 h-36 absolute top-0 right-4 -translate-y-1/4 border-4">
                    <AvatarImage src={Profile.image} alt={Profile.name} />
                    <AvatarFallback>0 _ 0</AvatarFallback>
                </Avatar>

            </CardHeader>

            <CardContent className="bg-surface text-onSurface p-4 pt-0 flex flex-col gap-2">
                {Profile.skills.map((skill) => (
                    <div key={skill} className="flex gap-2 items-start">
                        <div className="flex flex-col justify-start">
                            <span className="text-primary font-bold leading-none">::</span>
                        </div>
                        <div className="text-sm font-mono">{skill.toUpperCase()}</div>
                    </div>
                ))}
            </CardContent>
        </Card>

    );
}
