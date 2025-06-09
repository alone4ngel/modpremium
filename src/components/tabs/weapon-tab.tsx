import React from "react";
import { Switch, Slider, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FeatureCard } from "../feature-card";

export const WeaponTab: React.FC = () => {
  const [aimbot, setAimbot] = React.useState(true);
  const [triggerbot, setTriggerbot] = React.useState(false);
  const [noRecoil, setNoRecoil] = React.useState(true);
  const [aimbotFov, setAimbotFov] = React.useState(40);
  const [aimbotSmoothing, setAimbotSmoothing] = React.useState(60);
  const [selectedAimbotKey, setSelectedAimbotKey] = React.useState("Right Mouse");
  const [selectedAimbotTarget, setSelectedAimbotTarget] = React.useState("Head");
  
  return (
    <div className="py-4 px-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard 
          title="Aimbot Settings" 
          gradientClass="animated-gradient-red"
          glowClass="glow-red"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Enable Aimbot</span>
            <Switch 
              isSelected={aimbot} 
              onValueChange={setAimbot}
              color="danger"
              size="sm"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/80">FOV</span>
              <span className="text-xs text-white/60">{aimbotFov}°</span>
            </div>
            <Slider 
              aria-label="Aimbot FOV" 
              value={aimbotFov}
              onChange={setAimbotFov}
              color="danger"
              step={1}
              minValue={10}
              maxValue={180}
              className="max-w-full"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/80">Smoothing</span>
              <span className="text-xs text-white/60">{aimbotSmoothing}%</span>
            </div>
            <Slider 
              aria-label="Aimbot Smoothing" 
              value={aimbotSmoothing}
              onChange={setAimbotSmoothing}
              color="danger"
              step={1}
              minValue={0}
              maxValue={100}
              className="max-w-full"
            />
          </div>
          
          <div className="pt-2 grid grid-cols-2 gap-2">
            <div>
              <span className="text-sm text-white/80 block mb-2">Activation Key</span>
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    variant="flat" 
                    className="w-full justify-between bg-white/5 border-white/10"
                    endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
                  >
                    {selectedAimbotKey}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Aimbot Keys"
                  onAction={(key) => setSelectedAimbotKey(key.toString())}
                  className="bg-content1/95 backdrop-blur-md"
                >
                  <DropdownItem key="Right Mouse">Right Mouse</DropdownItem>
                  <DropdownItem key="Left Alt">Left Alt</DropdownItem>
                  <DropdownItem key="Left Shift">Left Shift</DropdownItem>
                  <DropdownItem key="E">E</DropdownItem>
                  <DropdownItem key="X">X</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            
            <div>
              <span className="text-sm text-white/80 block mb-2">Target</span>
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    variant="flat" 
                    className="w-full justify-between bg-white/5 border-white/10"
                    endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
                  >
                    {selectedAimbotTarget}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Aimbot Target"
                  onAction={(key) => setSelectedAimbotTarget(key.toString())}
                  className="bg-content1/95 backdrop-blur-md"
                >
                  <DropdownItem key="Head">Head</DropdownItem>
                  <DropdownItem key="Neck">Neck</DropdownItem>
                  <DropdownItem key="Chest">Chest</DropdownItem>
                  <DropdownItem key="Closest">Closest</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </FeatureCard>
        
        <FeatureCard 
          title="Weapon Modifications" 
          gradientClass="animated-gradient-purple"
          glowClass="glow-purple"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">No Recoil</span>
            <Switch 
              isSelected={noRecoil} 
              onValueChange={setNoRecoil}
              color="secondary"
              size="sm"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Triggerbot</span>
            <Switch 
              isSelected={triggerbot} 
              onValueChange={setTriggerbot}
              color="secondary"
              size="sm"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Switch size="sm" color="secondary" defaultSelected />
                <span className="text-sm text-white/80">No Spread</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch size="sm" color="secondary" defaultSelected />
                <span className="text-sm text-white/80">Rapid Fire</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch size="sm" color="secondary" />
                <span className="text-sm text-white/80">Auto-Reload</span>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <span className="text-sm text-white/80 block mb-2">Custom Weapon</span>
            <Input
              type="text"
              placeholder="Search weapon..."
              variant="bordered"
              radius="lg"
              startContent={<Icon icon="lucide:search" className="text-white/50 text-sm" />}
              className="w-full bg-white/5"
            />
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};