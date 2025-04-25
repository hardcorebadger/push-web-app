import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Search, Settings, User } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Real World Examples */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Dashboard</h1>
              <div className="ml-8 flex items-center space-x-4">
                <Button variant="ghost" size="sm">Overview</Button>
                <Button variant="ghost" size="sm">Analytics</Button>
                <Button variant="ghost" size="sm">Reports</Button>
                <Button variant="ghost" size="sm">Settings</Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8 w-[200px]" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <Badge variant="secondary">+20.1%</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Badge variant="secondary">+15%</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">+15% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <Badge variant="secondary">+5%</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12/20</div>
                <div className="mt-2">
                  <Progress value={60} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <Switch id="notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch id="dark-mode" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Show advanced settings</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold">Component Library</h2>
            <p className="text-muted-foreground">A comprehensive display of UI components</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Buttons Card */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Various button styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            {/* Form Elements Card */}
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>Input controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here..." />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selection Controls Card */}
            <Card>
              <CardHeader>
                <CardTitle>Selection Controls</CardTitle>
                <CardDescription>Radio and Select</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup defaultValue="option-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-1" id="option-1" />
                    <Label htmlFor="option-1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-2" id="option-2" />
                    <Label htmlFor="option-2">Option 2</Label>
                  </div>
                </RadioGroup>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Feedback Elements Card */}
            <Card>
              <CardHeader>
                <CardTitle>Feedback Elements</CardTitle>
                <CardDescription>Status indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    This is an important message.
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <Label>Progress</Label>
                  <Progress value={33} />
                </div>
                <div className="space-y-2">
                  <Label>Slider</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>

            {/* Badges and Avatars Card */}
            <Card>
              <CardHeader>
                <CardTitle>Badges & Avatars</CardTitle>
                <CardDescription>Status indicators and user images</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Separators and Text Card */}
            <Card>
              <CardHeader>
                <CardTitle>Separators & Text</CardTitle>
                <CardDescription>Dividers and typography</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>Above the separator</div>
                  <Separator />
                  <div>Below the separator</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">This is muted text</p>
                  <p className="text-sm font-medium">This is medium text</p>
                  <p className="text-sm font-bold">This is bold text</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
