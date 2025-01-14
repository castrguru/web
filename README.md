![Castr Guru logo](https://i.ibb.co/vHCBZSY/guru-256.png)

# Castr GÜRŲ

### https://castr.guru

A comprehensive UI/UX development kit for Farcaster frames builders.

UI offers front-end software development kit (SDK); while UX back-end portal for Farcaster frames builders.

### THIS PROJECT IS CURRENTLY STILL IN ALPHA-STAGE DEVELOPMENT. PLEASE DO NOT USE IN PRODUCTION.

---

# Table of Contents
- [Introduction](#introduction)
- [Next.js Components](#nextjs-components)
- [UI Components](#ui-components)
- [UX Modules](#ux-modules)


# Introduction

Castr GÜRŲ is a remote node assistant, built for the sole purpose of making Farcaster frames management effortless from A to Z.


# Next.js Components

This is the introduction section.

## Guru Provider

```tsx
import { GuruProvider } from '@castrguru/next';
```


# UI Components

This is the conclusion section.

## Bottom Sheet

```tsx
import { useState } from 'react'
import { BottomSheet, BottomSheetContext } from '@castrguru/ui';

export function Navbar({ tableid }: { tableid: string}) {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState<BottomSheetContext>(false);

  return (
    <BottomSheet isOpen={isBottomSheetOpen}>
      {children}
    </BottomSheet>
  )
```


# UX Modules

This is the conclusion section.

## Get User

```tsx
import { getUser } from '@castrguru/ux';
```
