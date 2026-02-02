# EFCoachSite V2 Design: Booking System Integration

## Overview

Upgrade efcoachsite from static HTML to Next.js with integrated Cal.com booking system. Primary goal: reduce scheduling friction by enabling instant online booking with payment.

## Tech Stack

- **Next.js 14** (App Router) with TypeScript
- **Cal.com** (cloud-hosted) for booking
- **Tailwind CSS** for styling
- **Stripe** for payments (via Cal.com)
- **Google Calendar** two-way sync
- **Zoom** auto-generated links for virtual sessions

## Site Structure

```
/                    → Homepage (migrated)
/methodology         → Methodology page (migrated)
/services            → Services page (migrated)
/about               → About page (migrated)
/contact             → Contact page (migrated)
/book                → NEW: Booking hub
/book/[service]      → NEW: Service-specific booking
```

## Booking System Requirements

### Event Types

| Event | Duration | Price | Location |
|-------|----------|-------|----------|
| Free Consultation | 20 min | $0 | Virtual only |
| 1:1 EF Coaching | 60 min | $200 | In-person OR Virtual |
| Saturday Workshop | 90 min | $40 | In-person (Liberty Station) |
| IEP Translation | 60 min | $250 | In-person OR Virtual |

### Booking Flow

1. User clicks "Book Now" from any page
2. Selects service type at `/book`
3. Cal.com embed shows available slots (synced from Google Calendar)
4. User selects location preference (in-person or virtual)
5. User completes intake form (required)
6. User pays via Stripe (charged immediately, except free consults)
7. Confirmation email with calendar invite + Zoom link (if virtual)

### Policies

- **Cancellation:** Free reschedule/cancel up to 48 hours before session
- **Inside 48 hours:** Charged full price, no refund
- **Payment:** Required at booking (card charged immediately)

### Intake Forms

**All Services:**
- Parent name, email, phone
- Child's first name & age
- How did you hear about Jacob?

**Free Consultation adds:**
- What's your biggest challenge right now?
- Has your child been evaluated for ADHD/learning differences?

**1:1 Coaching adds:**
- Current IEP/504 status
- Primary goals (checkboxes)
- Anything else Jacob should know?

**IEP Translation adds:**
- Upload current IEP (file)
- Upcoming IEP meeting date
- Specific concerns about current IEP

### Reminders

- 24 hours before: Email + SMS
- 1 hour before: SMS only

## Component Architecture

### Migrated Components (from v1)
- `Navbar` - Fixed nav with mobile menu, parent/student toggle
- `Hero` - Dual-mode hero sections
- `ProblemSection` - Pain points grid
- `MethodologyPreview` - Improv, Chess, Cubing cards
- `CubeChallenge` - Lead magnet signup
- `ServicesPreview` - Pricing tiers
- `Testimonials` - Client quotes
- `Footer` - Site links

### New Components
- `BookingHub` - Service selection grid at `/book`
- `CalEmbed` - Wrapper around Cal.com embed
- `ServiceCard` - Clickable booking card
- `BookingCTA` - Consistent "Book Now" button

## Implementation Phases

### Phase 1: Foundation
- Initialize Next.js 14 + TypeScript + Tailwind
- Set up project structure
- Configure design tokens from current site
- Deploy to Vercel

### Phase 2: Content Migration
- Convert 5 HTML pages to Next.js
- Extract reusable components
- Implement parent/student mode toggle
- Verify mobile responsiveness

### Phase 3: Cal.com Integration
- Create Cal.com account
- Configure 4 event types
- Set up Stripe payments
- Connect Google Calendar
- Configure Zoom integration
- Build intake forms
- Style embed to match site

### Phase 4: Booking Pages
- Build `/book` hub page
- Build `/book/[service]` pages
- Update all CTAs to link to booking
- Add confirmation messaging

### Phase 5: Testing & Launch
- Test full booking flow per service
- Test Stripe in test mode
- Test calendar sync and reminders
- Test mobile experience
- Go live

## Design Principles

- **Preserve existing content** - Site copy and structure are solid, just upgrading platform
- **Minimize friction** - Instant booking, no back-and-forth scheduling
- **Prepare for sessions** - Required intake forms ensure Jacob comes prepared
- **Protect time** - Payment upfront + 48hr cancellation policy reduces no-shows
- **Stay flexible** - In-person and virtual options for all relevant services
