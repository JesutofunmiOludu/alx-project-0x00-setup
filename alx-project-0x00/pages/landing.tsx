import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">
                Landing Page
            </h1>
            <Card />
            {/* Buttons Section */}
      <div className="mt-10 space-y-8">

        {/* Size Variations */}
        <div>
          <h2 className="text-lg font-medium mb-2">Button Sizes</h2>
          <div className="flex gap-4">
            <Button title="Small" size="small" />
            <Button title="Medium" size="medium" />
            <Button title="Large" size="large" />
          </div>
        </div>

        {/* Shape Variations */}
        <div>
          <h2 className="text-lg font-medium mb-2">Button Shapes</h2>
          <div className="flex gap-4">
            <Button title="Rounded SM" shape="rounded-sm" />
            <Button title="Rounded MD" shape="rounded-md" />
            <Button title="Rounded FULL" shape="rounded-full" />
          </div>
        </div>

      </div>

        </div>

        
    )
}

export default Landing;