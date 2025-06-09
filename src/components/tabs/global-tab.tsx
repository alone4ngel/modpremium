import React from "react";
import { Switch, Slider, Checkbox } from "@heroui/react";
import { FeatureCard } from "../feature-card";

export const GlobalTab: React.FC = () => {
  const [godMode, setGodMode] = React.useState(false);
  const [invisibility, setInvisibility] = React.useState(false);
  const [speedValue, setSpeedValue] = React.useState(50);
  const [jumpValue, setJumpValue] = React.useState(30);
  const [noClip, setNoClip] = React.useState(false);
  const [antiCheatBypass, setAntiCheatBypass] = React.useState(true);
  const [teleportEnabled, setTeleportEnabled] = React.useState(false);
  
  return (
    <div className="py-4 px-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard 
          title="Player Modifications" 
          gradientClass="animated-gradient-blue"
          glowClass="glow-blue"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">God Mode</span>
            <Switch 
              isSelected={godMode} 
              onValueChange={setGodMode}
              color="primary"
              size="sm"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Invisibility</span>
            <Switch 
              isSelected={invisibility} 
              onValueChange={setInvisibility}
              color="primary"
              size="sm"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/80">Movement Speed</span>
              <span className="text-xs text-white/60">{speedValue}%</span>
            </div>
            <Slider 
              aria-label="Speed" 
              value={speedValue}
              onChange={setSpeedValue}
              color="primary"
              step={1}
              minValue={0}
              maxValue={200}
              className="max-w-full"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/80">Jump Height</span>
              <span className="text-xs text-white/60">{jumpValue}%</span>
            </div>
            <Slider 
              aria-label="Jump Height" 
              value={jumpValue}
              onChange={setJumpValue}
              color="primary"
              step={1}
              minValue={0}
              maxValue={100}
              className="max-w-full"
            />
          </div>
        </FeatureCard>
        
        <FeatureCard 
          title="Game Mechanics" 
          gradientClass="animated-gradient-purple"
          glowClass="glow-purple"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">No-Clip Mode</span>
            <Switch 
              isSelected={noClip} 
              onValueChange={setNoClip}
              color="secondary"
              size="sm"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Anti-Cheat Bypass</span>
            <Switch 
              isSelected={antiCheatBypass} 
              onValueChange={setAntiCheatBypass}
              color="secondary"
              size="sm"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Teleport</span>
            <Switch 
              isSelected={teleportEnabled} 
              onValueChange={setTeleportEnabled}
              color="secondary"
              size="sm"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex flex-col gap-2">
              <Checkbox color="secondary" size="sm">
                <span className="text-sm text-white/80">Infinite Ammo</span>
              </Checkbox>
              <Checkbox color="secondary" size="sm">
                <span className="text-sm text-white/80">No Reload</span>
              </Checkbox>
              <Checkbox color="secondary" size="sm">
                <span className="text-sm text-white/80">Unlimited Resources</span>
              </Checkbox>
            </div>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};