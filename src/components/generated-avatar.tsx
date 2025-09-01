import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GenarateAvatarProps {
    seed: string;
    className?: string;
    variant: "bottsNeutral" | "initials";
}

export const GenerateAvatar = ({
    seed,
    className,
    variant,
}: GenarateAvatarProps) =>{
    let avatar;

    if (variant === "bottsNeutral") {
        avatar = createAvatar(botttsNeutral, {
            seed,
        });
    } else{
        avatar = createAvatar(initials, {
            seed,
            fontWeight: 500,
            fontSize: 42,
        })
    }

    return(
        <Avatar className={cn(className)}>
            <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
            <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    )
};