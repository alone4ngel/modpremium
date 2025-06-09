import React from "react";
import { Switch, Slider, Input, Button, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FeatureCard } from "../feature-card";

export const SettingsTab: React.FC = () => {
  const [autoUpdate, setAutoUpdate] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);
  const [panicKey, setPanicKey] = React.useState("F4");
  const [menuOpacity, setMenuOpacity] = React.useState(85);
  
  return (
    <div className="py-4 px-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard 
          title="Menu Settings" 
          gradientClass="animated-gradient-blue"
          glowClass="glow-blue"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Auto-Update</span>
            <Switch 
              isSelected={autoUpdate} 
              onValueChange={setAutoUpdate}
              color="primary"
              size="sm"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/80">Notifications</span>
            <Switch 
              isSelected={notifications} 
              onValueChange={setNotifications}
              color="primary"
              size="sm"
            />
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-white/80">Menu Opacity</span>
              <span className="text-xs text-white/60">{menuOpacity}%</span>
            </div>
            <Slider 
              aria-label="Menu Opacity" 
              value={menuOpacity}
              onChange={setMenuOpacity}
              color="primary"
              step={1}
              minValue={30}
              maxValue={100}
              className="max-w-full"
            />
          </div>
          
          <div className="pt-2">
            <span className="text-sm text-white/80 block mb-2">Panic Key</span>
            <Input
              type="text"
              value={panicKey}
              onValueChange={setPanicKey}
              variant="bordered"
              radius="lg"
              className="w-full bg-white/5"
            />
          </div>
        </FeatureCard>
        
        <FeatureCard 
          title="Account & Security" 
          gradientClass="animated-gradient-purple"
          glowClass="glow-purple"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">License Status</span>
              <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Active</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">Expires</span>
              <span className="text-xs text-white/60">30 Days</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">HWID Lock</span>
              <Switch size="sm" color="secondary" defaultSelected />
            </div>
          </div>
          
          <div className="pt-3">
            <div className="flex flex-col gap-2">
              <Checkbox color="secondary" size="sm" defaultSelected>
                <span className="text-sm text-white/80">Auto-Login</span>
              </Checkbox>
              
              <Checkbox color="secondary" size="sm" defaultSelected>
                <span className="text-sm text-white/80">Hide from Task Manager</span>
              </Checkbox>
              
              <Checkbox color="secondary" size="sm">
                <span className="text-sm text-white/80">Secure Mode</span>
              </Checkbox>
            </div>
          </div>
          
          <div className="pt-3">
            <Button 
              color="danger" 
              variant="flat" 
              className="w-full"
              startContent={<Icon icon="lucide:log-out" className="text-sm" />}
            >
              Logout
            </Button>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};