"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Mail, Save } from "lucide-react";
import { useState } from "react";

export default function EmailNotifications() {
  const [enabled, setEnabled] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(false);
  const [achievement, setAchievement] = useState(false);
  const [digestTime, setDigestTime] = useState("09:00");

  return (
    <Card className="max-w-full">
      <CardHeader className="mt-4 -ml-2">
        <CardTitle className="text-2xl font-bold">
          <div className="flex items-center">
            <Mail className="mt-0.5 mr-1.5" />
            Email Notifications
          </div>
        </CardTitle>
        <p className="-mt-2 text-xs text-muted-foreground font-semibold">
          Configure when and how you receive email notifications.
        </p>
      </CardHeader>
      <CardContent className="space-y-4.5 -ml-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Enable Email Notifications</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Receive notifications via email
            </p>
          </div>
          <Switch checked={enabled} onCheckedChange={setEnabled} />
        </div>
        <hr className="-mt-2" />

        <div className="flex items-center justify-between -mt-2">
          <div>
            <p className="text-sm font-semibold">Reminder Alerts</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Get notified about upcoming problems
            </p>
          </div>
          <Switch checked={reminder} onCheckedChange={setReminder} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Daily Digest</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Summary of your daily progress
            </p>
          </div>
          <Switch checked={daily} onCheckedChange={setDaily} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Weekly Report</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Weekly progress and statistics
            </p>
          </div>
          <Switch checked={weekly} onCheckedChange={setWeekly} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Achievement Notifications</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Celebrate your milestones
            </p>
          </div>
          <Switch checked={achievement} onCheckedChange={setAchievement} />
        </div>

        <div>
          <p className="text-sm font-semibold">Daily Digest Time</p>
          <Input
            type="time"
            value={digestTime}
            onChange={(e) => setDigestTime(e.target.value)}
            className="mt-1 w-28"
          />
        </div>

        <div className="flex justify-between">
          <Button variant="outline" className="mb-4">
            Send Test Email
          </Button>
          <Button className="rounded">
            <Save />
            Save Notification Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
