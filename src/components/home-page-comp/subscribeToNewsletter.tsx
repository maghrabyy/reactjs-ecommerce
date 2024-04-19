import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const SubscribeToNewsletter = ()=>{
    return <div className="subscirbe-to-newsletter section space-y-2 bg-grad py-12">
        <h2 className="font-bold md:text-2xl sm:text-xl text-lg">Subscribe to our newsletter.</h2>
        <div className="flex gap-2">
            <Input placeholder="Enter your email address." type="email"/>
            <Button>Subscribe</Button>
        </div>
    </div>
}