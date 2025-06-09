import React from "react";
import { Switch, Slider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FeatureCard } from "../feature-card";

export const VisualTab: React.FC = () => {
  const [espEnabled, setEspEnabled] = React.useState(true);
  const [wallhackEnabled, setWallhackEnabled] = React.useState(true);
  const [nightVision, setNightVision] = React.useState(false);
  const [espDistance, setEspDistance] = React.useState(150);
  const [espOpacity, setEspOpacity] = React.useState(70);
  const [selectedESPColor, setSelectedESPColor] = React.useState("Rainbow");
  
  return (
    <div className="py-4 px-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard 
          title="ESP Settings" 
          gradientClass="animated-gradient-purple"
          glowClass="glow-purple"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Enable ESP</span>
            <Switch 
              isSelected={espEnabled} 
              onValueChange={setEspEnabled}
              color="secondary"
              size="sm"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/80">ESP Distance</span>
              <span className="text-xs text-white/60">{espDistance}m</span>
            </div>
            <Slider 
              aria-label="ESP Distance" 
              value={espDistance}
              onChange={setEspDistance}
              color="secondary"
              step={10}
              minValue={50}
              maxValue={500}
              className="max-w-full"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/80">ESP Opacity</span>
              <span className="text-xs text-white/60">{espOpacity}%</span>
            </div>
            <Slider 
              aria-label="ESP Opacity" 
              value={espOpacity}
              onChange={setEspOpacity}
              color="secondary"
              step={1}
              minValue={10}
              maxValue={100}
              className="max-w-full"
            />
          </div>
          
          <div className="pt-2">
            <span className="text-sm text-white/80 block mb-2">ESP Color</span>
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="flat" 
                  className="w-full justify-between bg-white/5 border-white/10"
                  endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
                >
                  {selectedESPColor}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="ESP Colors"
                onAction={(key) => setSelectedESPColor(key.toString())}
                className="bg-content1/95 backdrop-blur-md"
              >
                <DropdownItem key="Rainbow">Rainbow</DropdownItem>
                <DropdownItem key="Red">Red</DropdownItem>
                <DropdownItem key="Green">Green</DropdownItem>
                <DropdownItem key="Blue">Blue</DropdownItem>
                <DropdownItem key="Yellow">Yellow</DropdownItem>
                <DropdownItem key="Purple">Purple</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </FeatureCard>
        
        <FeatureCard 
          title="Visual Effects" 
          gradientClass="animated-gradient-blue"
          glowClass="glow-blue"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Wallhack</span>
            <Switch 
              isSelected={wallhackEnabled} 
              onValueChange={setWallhackEnabled}
              color="primary"
              size="sm"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Night Vision</span>
            <Switch 
              isSelected={nightVision} 
              onValueChange={setNightVision}
              color="primary"
              size="sm"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Switch size="sm" color="primary" defaultSelected />
                <span className="text-sm text-white/80">Player Boxes</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch size="sm" color="primary" defaultSelected />
                <span className="text-sm text-white/80">Player Names</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch size="sm" color="primary" defaultSelected />
                <span className="text-sm text-white/80">Health Bars</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch size="sm" color="primary" />
                <span className="text-sm text-white/80">Distance</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch size="sm" color="primary" />
                <span className="text-sm text-white/80">Skeleton</span>
              </div>
            </div>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};