import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { GlobalTab } from "./tabs/global-tab";
import { VisualTab } from "./tabs/visual-tab";
import { WeaponTab } from "./tabs/weapon-tab";
import { SettingsTab } from "./tabs/settings-tab";
import { MenuHeader } from "./menu-header";

export const ModMenu: React.FC = () => {
  const [selected, setSelected] = React.useState("global");

  return (
    <Card 
      className="glass-effect-darker rounded-2xl overflow-visible border-none shadow-2xl"
      radius="lg"
      disableAnimation
    >
      <CardBody className="p-0 overflow-hidden">
        <div className="relative w-full">
          <MenuHeader />
          
          <div className="p-4">
            <Tabs 
              aria-label="Mod Menu Tabs" 
              selectedKey={selected} 
              onSelectionChange={setSelected}
              color="primary"
              variant="underlined"
              classNames={{
                tabList: "gap-6",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-0 h-10 data-[selected=true]:text-primary"
              }}
            >
              <Tab 
                key="global" 
                title={
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Global</span>
                  </div>
                }
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key="global-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlobalTab />
                  </motion.div>
                </AnimatePresence>
              </Tab>
              <Tab 
                key="visual" 
                title={
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Visual</span>
                  </div>
                }
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key="visual-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <VisualTab />
                  </motion.div>
                </AnimatePresence>
              </Tab>
              <Tab 
                key="weapon" 
                title={
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Weapon</span>
                  </div>
                }
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key="weapon-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <WeaponTab />
                  </motion.div>
                </AnimatePresence>
              </Tab>
              <Tab 
                key="settings" 
                title={
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Settings</span>
                  </div>
                }
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key="settings-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SettingsTab />
                  </motion.div>
                </AnimatePresence>
              </Tab>
            </Tabs>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};