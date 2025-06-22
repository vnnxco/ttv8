"use client"

import * as React from "react"
import { 
  PlusIcon,
  BotIcon,
  MessageSquareIcon,
  DatabaseIcon,
  BarChartIcon,
  SettingsIcon,
  ZapIcon,
  SparklesIcon,
  BrainIcon,
  StarIcon,
  TrendingUpIcon,
  ClockIcon,
  UsersIcon,
  FolderIcon,
  AlertTriangleIcon,
  BugIcon,
  WifiOffIcon,
  ShieldAlertIcon,
  HelpCircleIcon,
  ExclamationTriangleIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const dashboardMetrics = [
  { 
    icon: FolderIcon, 
    title: "Active Projects", 
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    data: "3",
    subtitle: "View and manage your projects"
  },
  { 
    icon: MessageSquareIcon, 
    title: "Total Conversations", 
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    data: "1,284",
    subtitle: "+15% from last month",
    trend: true
  },
  { 
    icon: DatabaseIcon, 
    title: "Knowledge Sources", 
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    data: "12",
    subtitle: "Documents & websites in your library"
  },
  { 
    icon: ZapIcon, 
    title: "Message Credits Used", 
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    data: "8,500 / 15,000",
    subtitle: "72% of monthly credits used",
    progress: 72
  },
  { 
    icon: ClockIcon, 
    title: "Avg. Response Time", 
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    data: "1.8s",
    subtitle: "AI performance"
  },
  { 
    icon: UsersIcon, 
    title: "Team Members", 
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    data: "2 / 3",
    subtitle: "Invite and manage collaborators"
  }
]

const issueReports = [
  {
    id: 1,
    title: "AI Response Delays During Peak Hours",
    description: "Multiple users reporting slow response times between 2-4 PM EST",
    priority: "high",
    reportedBy: "Sarah Chen",
    timeAgo: "2 minutes ago",
    reportCount: 12,
    icon: AlertTriangleIcon,
    bgColor: "bg-red-500",
    status: "investigating"
  },
  {
    id: 2,
    title: "Knowledge Base Sync Issues",
    description: "Documents not updating properly after upload",
    priority: "medium",
    reportedBy: "Mike Johnson",
    timeAgo: "15 minutes ago",
    reportCount: 8,
    icon: DatabaseIcon,
    bgColor: "bg-orange-500",
    status: "pending"
  },
  {
    id: 3,
    title: "Login Authentication Errors",
    description: "Google SSO failing for some enterprise users",
    priority: "medium",
    reportedBy: "Alex Rodriguez",
    timeAgo: "1 hour ago",
    reportCount: 5,
    icon: ShieldAlertIcon,
    bgColor: "bg-yellow-500",
    status: "pending"
  },
  {
    id: 4,
    title: "Mobile App Crashes on iOS 17",
    description: "App crashes when accessing chat history on latest iOS",
    priority: "low",
    reportedBy: "Emma Davis",
    timeAgo: "3 hours ago",
    reportCount: 3,
    icon: BugIcon,
    bgColor: "bg-blue-500",
    status: "pending"
  },
  {
    id: 5,
    title: "Export Feature Not Working",
    description: "CSV export button not responding in analytics section",
    priority: "low",
    reportedBy: "David Kim",
    timeAgo: "1 day ago",
    reportCount: 2,
    icon: ExclamationTriangleIcon,
    bgColor: "bg-gray-500",
    status: "pending"
  }
]

const unansweredQuestions = [
  {
    id: 1,
    question: "How to integrate custom webhooks with Slack notifications?",
    askedBy: "Jennifer Walsh",
    timeAgo: "5 minutes ago",
    tags: ["integrations", "slack", "webhooks"],
    votes: 8
  },
  {
    id: 2,
    question: "Best practices for training AI with industry-specific terminology?",
    askedBy: "Robert Chen",
    timeAgo: "20 minutes ago",
    tags: ["training", "ai", "customization"],
    votes: 12
  },
  {
    id: 3,
    question: "How to set up role-based access control for team members?",
    askedBy: "Lisa Anderson",
    timeAgo: "45 minutes ago",
    tags: ["permissions", "team", "security"],
    votes: 6
  },
  {
    id: 4,
    question: "Can I use custom CSS to style the chat widget?",
    askedBy: "Mark Thompson",
    timeAgo: "2 hours ago",
    tags: ["customization", "css", "widget"],
    votes: 4
  }
]

const getStatusBadge = (status: string) => {
  if (status === 'investigating') {
    return (
      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-xs">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
        Investigating
      </Badge>
    )
  }
  return (
    <Badge variant="outline" className="bg-gray-500/10 text-gray-500 border-gray-500/20 text-xs">
      <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
      Pending
    </Badge>
  )
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'text-red-400 bg-red-500/10 border-red-500/20'
    case 'medium':
      return 'text-orange-400 bg-orange-500/10 border-orange-500/20'
    case 'low':
      return 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    default:
      return 'text-gray-400 bg-gray-500/10 border-gray-500/20'
  }
}

export function Homepage() {
  const [activeTab, setActiveTab] = React.useState<'issues' | 'questions'>('issues')

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 lg:px-16 xl:px-24 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">My Workspace</p>
              <h1 className="text-2xl sm:text-3xl font-medium text-white">
                Good afternoon, Tails
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <SettingsIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Dashboard Metrics Grid - Compact Version */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {dashboardMetrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <Card
                  className={`bg-sidebar border-0 hover:bg-sidebar-accent transition-colors p-4 w-full cursor-default`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                      <metric.icon className={`h-4 w-4 ${metric.color}`} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-sidebar-foreground">{metric.data}</span>
                      {metric.trend && (
                        <TrendingUpIcon className="h-3 w-3 text-green-500" />
                      )}
                    </div>
                    
                    {metric.progress && (
                      <div className="space-y-1">
                        <Progress value={metric.progress} className="h-1.5" />
                      </div>
                    )}
                  </div>
                </Card>
                
                {/* Text moved below the card */}
                <div className="mt-2 px-1">
                  <p className="text-xs font-medium text-sidebar-foreground/80 mb-1">{metric.title}</p>
                  <p className="text-xs text-sidebar-foreground/60 leading-tight">{metric.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Issue Reports / Unanswered Questions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant={activeTab === 'issues' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab('issues')}
                  className={activeTab === 'issues' ? 'bg-sidebar-foreground text-sidebar' : 'text-gray-400 hover:text-white'}
                >
                  Issue Reports
                </Button>
                <Button
                  variant={activeTab === 'questions' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab('questions')}
                  className={activeTab === 'questions' ? 'bg-sidebar-foreground text-sidebar' : 'text-gray-400 hover:text-white'}
                >
                  Unanswered Questions
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {activeTab === 'issues' ? (
                issueReports.map((issue) => (
                  <Card
                    key={issue.id}
                    className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors cursor-pointer p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`${issue.bgColor} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <issue.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-sidebar-foreground font-medium text-sm line-clamp-1">
                            {issue.title}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                            <Badge variant="outline" className={`text-xs ${getPriorityColor(issue.priority)}`}>
                              {issue.priority}
                            </Badge>
                            {getStatusBadge(issue.status)}
                          </div>
                        </div>
                        <p className="text-sidebar-foreground/70 text-xs line-clamp-2 mb-3">
                          {issue.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-sidebar-foreground/60">
                          <span>By {issue.reportedBy}</span>
                          <div className="flex items-center gap-3">
                            <span>{issue.reportCount} reports</span>
                            <span>{issue.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                unansweredQuestions.map((question) => (
                  <Card
                    key={question.id}
                    className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors cursor-pointer p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HelpCircleIcon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-sidebar-foreground font-medium text-sm line-clamp-2 leading-relaxed">
                            {question.question}
                          </h3>
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs flex-shrink-0 ml-2">
                            {question.votes} votes
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {question.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs bg-sidebar-foreground/5 text-sidebar-foreground/60 border-sidebar-foreground/10"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-xs text-sidebar-foreground/60">
                          <span>Asked by {question.askedBy}</span>
                          <span>{question.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Quick Actions / System Status */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">System Status</h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                View Details
              </Button>
            </div>
            <div className="space-y-4">
              {/* System Health Cards */}
              <Card className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <h3 className="text-sidebar-foreground font-medium text-sm">AI Services</h3>
                      <p className="text-sidebar-foreground/70 text-xs">All systems operational</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    99.9% uptime
                  </Badge>
                </div>
              </Card>

              <Card className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div>
                      <h3 className="text-sidebar-foreground font-medium text-sm">Database</h3>
                      <p className="text-sidebar-foreground/70 text-xs">Minor performance issues</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                    Monitoring
                  </Badge>
                </div>
              </Card>

              <Card className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <h3 className="text-sidebar-foreground font-medium text-sm">API Gateway</h3>
                      <p className="text-sidebar-foreground/70 text-xs">Running smoothly</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    Healthy
                  </Badge>
                </div>
              </Card>

              <Card className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <h3 className="text-sidebar-foreground font-medium text-sm">CDN & Storage</h3>
                      <p className="text-sidebar-foreground/70 text-xs">Optimal performance</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    Operational
                  </Badge>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-sidebar-border">
                <h3 className="text-sidebar-foreground font-medium text-sm mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80 justify-start"
                  >
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80 justify-start"
                  >
                    <DatabaseIcon className="h-4 w-4 mr-2" />
                    Add Data
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80 justify-start"
                  >
                    <BotIcon className="h-4 w-4 mr-2" />
                    Test AI
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80 justify-start"
                  >
                    <BarChartIcon className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}