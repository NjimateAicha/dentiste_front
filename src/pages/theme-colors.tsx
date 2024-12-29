import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const colors = [
    "-sidebar-background",
    "-sidebar-foreground",
    "-sidebar-primary",
    "-sidebar-primary-foreground",
    "-sidebar-accent",
    "-sidebar-accent-foreground",
    "-sidebar-border",
    "-sidebar-ring",
    "-background",
    "-foreground",
    "-card",
    "-card-foreground",
    "-popover",
    "-popover-foreground",
    "-primary",
    "-primary-foreground",
    "-secondary",
    "-secondary-foreground",
    "-muted",
    "-muted-foreground",
    "-accent",
    "-accent-foreground",
    "-destructive",
    "-destructive-foreground",
    "-border",
    "-input",
    "-ring",
    "-chart-1",
    "-chart-2",
    "-chart-3",
    "-chart-4",
    "-chart-5",
];


export default function ColorPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {colors.map((color) => (
                <Card key={color} className="overflow-hidden">
                    <CardHeader className={`h-24 bg${color}`}></CardHeader>
                    <CardContent>
                        <CardTitle>{color}</CardTitle>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
