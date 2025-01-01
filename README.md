# Castr GÜRŲ

### https://castr.guru

A comprehensive UI/UX development kit for Farcaster frames builders.

UI offers front-end software development kit (SDK); while UX back-end portal for Farcaster frames builders.


# Table of Contents
- [Introduction](#introduction)
- [Next.js Components](#nextjs-components)
- [UI Components](#ui-components)
- [UX Modules](#ux-modules)


# Introduction

This is the conclusion section.


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
