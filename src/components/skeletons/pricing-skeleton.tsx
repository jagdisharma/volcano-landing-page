import {
    Card, CardContent, CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PricingSkeleton = () => {
    return (
        <>
            {Array.from({ length: 2 }).map((_, index) => (
                <Card
                    key={index}
                    className="border-primary h-full flex flex-col justify-between transition-all duration-200 transform hover:scale-105 hover:shadow-xl min-w-[280px] max-w-xs mx-auto"
                >
                    <Skeleton className="w-[80%] h-10 text-center mx-4 mt-4" />

                    <CardHeader className="text-center pb-2 mt-4 flex justify-center items-center">
                        <CardTitle className="!mb-6 w-3/4">
                            <Skeleton className="w-full h-6 mx-auto text-center" />
                        </CardTitle>

                        <Skeleton className="w-20 h-10 text-center" />
                    </CardHeader>

                    <CardDescription className="text-center w-11/12 mx-auto mb-6">
                        <Skeleton className="w-3/4 h-6 mx-auto" />
                    </CardDescription>

                    <CardContent className="flex-1">
                        <ul className="space-y-3 text-sm">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <Skeleton className="w-4 h-4 rounded-full" />
                                    <Skeleton className="w-3/4 h-4" />
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                    <CardFooter className="mt-4">
                        <Skeleton className="w-full h-8" />
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}

export default PricingSkeleton
