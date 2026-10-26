import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Users,
  Bell,
  FileText,
  Clock,
  CheckCircle2,
  Check,
  Lock,
  RefreshCw,
  Zap,
  BarChart3,
  Share2,
  Cpu,
  Mail,
  Phone,
  Star,
  Play,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Building2,
  Globe,
  MessageSquare,
  Settings,
  FileCheck,
  AlertCircle,
  ChevronDown,
  User,
  Search,
  LucideProps
} from 'lucide-react';

export type IconName =
  | 'sparkle'
  | 'shield'
  | 'users'
  | 'bell'
  | 'file'
  | 'clock'
  | 'check-circle'
  | 'check'
  | 'lock'
  | 'refresh'
  | 'zap'
  | 'bar'
  | 'share'
  | 'cpu'
  | 'mail'
  | 'phone'
  | 'star'
  | 'play'
  | 'menu'
  | 'x'
  | 'arrow'
  | 'pin'
  | 'building'
  | 'globe'
  | 'chat'
  | 'cog'
  | 'doc-check'
  | 'alert'
  | 'chevron'
  | 'user'
  | 'search';

interface IconProps extends LucideProps {
  name: IconName | string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'sparkle':
      return <Sparkles {...props} />;
    case 'shield':
      return <ShieldCheck {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'bell':
      return <Bell {...props} />;
    case 'file':
      return <FileText {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'check-circle':
      return <CheckCircle2 {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'lock':
      return <Lock {...props} />;
    case 'refresh':
      return <RefreshCw {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'bar':
      return <BarChart3 {...props} />;
    case 'share':
      return <Share2 {...props} />;
    case 'cpu':
      return <Cpu {...props} />;
    case 'mail':
      return <Mail {...props} />;
    case 'phone':
      return <Phone {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'play':
      return <Play {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'x':
      return <X {...props} />;
    case 'arrow':
      return <ArrowRight {...props} />;
    case 'pin':
      return <MapPin {...props} />;
    case 'building':
      return <Building2 {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'chat':
      return <MessageSquare {...props} />;
    case 'cog':
      return <Settings {...props} />;
    case 'doc-check':
      return <FileCheck {...props} />;
    case 'alert':
      return <AlertCircle {...props} />;
    case 'chevron':
      return <ChevronDown {...props} />;
    case 'user':
      return <User {...props} />;
    case 'search':
      return <Search {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};

export default Icon;
