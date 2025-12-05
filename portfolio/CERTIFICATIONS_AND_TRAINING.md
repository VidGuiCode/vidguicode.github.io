# Certifications & Training System

**Updated**: December 2025  
**Feature**: Integrated Certifications and Formations/Training System

---

## Overview

The portfolio now supports both **Certifications** and **Formations/Training** as separate but related entities. This allows you to:

1. Track certifications you've earned
2. Track training sessions/courses you've completed (even if no certification exists)
3. Link formations to certifications (many-to-many relationship)
4. Show relationships in modals

---

## Data Structure

### Certifications
Certifications are industry-recognized credentials with:
- Badge images
- Official URLs (Microsoft Learn, Credly)
- Certification levels (Beginner/Intermediate/Advanced)
- Status (completed/in-progress)
- **NEW**: `relatedFormations` array (IDs of related training sessions)

### Formations/Training
Formations are training sessions, courses, or workshops with:
- Provider and category
- Date completed
- Duration and format (In-person/Online/Hybrid)
- Skills learned
- Notes/description
- **NEW**: `relatedCertifications` array (IDs of related certifications)

---

## Key Features

### 1. **Independent Existence**
- Formations can exist without certifications
- Example: PL-900 training completed, but certification not taken
- You can document knowledge gained even without official credential

### 2. **Bidirectional Linking**
- Certifications show related formations in modal
- Formations show related certifications in modal
- Many-to-many relationship (one formation can link to multiple certs, vice versa)

### 3. **Filtering**
- **All**: Shows both certifications and formations
- **Certifications**: Shows only certifications
- **Training**: Shows only formations
- **Category filters**: Filter by category (Cloud Computing, Productivity, etc.)

### 4. **Visual Distinction**
- Certifications: Show badge image, level badge (green/blue/red)
- Formations: Show book icon, purple "Training" badge
- Formation rows have purple left border accent

---

## Example: PL-900 Training

```javascript
{
    id: 'pl-900-training',
    name: 'Power Platform Fundamentals (PL-900) Training',
    provider: 'Microsoft',
    category: 'Cloud Computing',
    description: 'Full-day training session...',
    dateCompleted: '2025-09-15',
    duration: '1 day',
    format: 'In-person',
    relatedCertifications: [], // No cert exists or was taken
    notes: 'I had a whole day with a person that explained us PL-900, so I know most of the content, even though I never did the certification.'
}
```

This formation:
- ✅ Exists independently (no certification required)
- ✅ Documents knowledge gained
- ✅ Can be linked to certifications later if you complete PL-900 cert
- ✅ Shows in "Training" filter
- ✅ Displays in modal with full details

---

## How to Add a New Formation

### 1. Add to `certifications-data.js`

```javascript
{
    id: 'your-formation-id',
    name: 'Training Name',
    nameKey: 'formation.yourid.name', // Translation key
    provider: 'Provider Name',
    category: 'Category',
    description: 'Description...',
    descriptionKey: 'formation.yourid.description',
    dateCompleted: 'YYYY-MM-DD',
    duration: 'X days/hours',
    format: 'In-person', // or 'Online' or 'Hybrid'
    relatedCertifications: ['cert-id-1', 'cert-id-2'], // Optional: link to certs
    skills: ['Skill 1', 'Skill 2'],
    skillsKeys: ['formation.yourid.skills.1', 'formation.yourid.skills.2'],
    notes: 'Optional notes...',
    notesKey: 'formation.yourid.notes'
}
```

### 2. Add Translations to `translations.js`

```javascript
"formation.yourid.name": {
    en: "Training Name",
    pt: "Nome da Formação",
    // ... other languages
},
"formation.yourid.description": { ... },
"formation.yourid.notes": { ... },
"formation.yourid.skills.1": { ... }
```

### 3. Link to Certification (Optional)

If the formation relates to a certification:

**In the certification:**
```javascript
relatedFormations: ['your-formation-id']
```

**In the formation:**
```javascript
relatedCertifications: ['cert-id']
```

---

## Modal Behavior

### Certification Modal
- Shows certification details
- **NEW**: Shows "Related Training" section if formations are linked
- Click formation name to open formation modal

### Formation Modal
- Shows formation details
- Shows notes (e.g., "I know most PL-900 content but didn't take cert")
- **NEW**: Shows "Related Certifications" section if certs are linked
- Click certification name to open certification modal

---

## UI Changes

### Page Title
- Changed from "Certifications & Badges" → **"Certifications & Training"**
- Matches index.html section title

### Filters
- Added "Certifications" filter (certifications only)
- Added "Training" filter (formations only)
- "All" shows both

### Visual Indicators
- **Certifications**: Badge image + colored level badge
- **Formations**: Book icon + purple "Training" badge + purple left border

---

## Benefits

1. **Complete Picture**: Document all learning, not just certifications
2. **Flexibility**: Track knowledge gained from training even without certs
3. **Relationships**: See how training connects to certifications
4. **Honesty**: Show "I know PL-900 content" even without the cert
5. **Professional**: Demonstrates continuous learning and development

---

**Last Updated**: December 2025

