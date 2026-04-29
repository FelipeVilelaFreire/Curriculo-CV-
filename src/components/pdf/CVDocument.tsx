"use client";
import React from "react";
import {
  Document, Page, Text, View, Image, Link, StyleSheet,
} from "@react-pdf/renderer";
import { type Messages } from "@/lib/LanguageContext";
import { personal, companies, toefl } from "@/data/personal";
import { SKILL_GROUPS } from "@/data/skills";
import { hobbymap } from "@/data/projects";

const C = {
  cyan:   "#06b6d4",
  dark:   "#18181b",
  muted:  "#71717a",
  border: "#e4e4e7",
  bg:     "#f4f4f5",
  cyanBg: "#ecfeff",
  white:  "#ffffff",
};

const s = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    paddingHorizontal: 30,
    paddingTop: 26,
    paddingBottom: 20,
    fontFamily: "Helvetica",
    color: C.dark,
  },

  // ── Header ──────────────────────────────────────────────────────
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  photo:  { width: 56, height: 56, borderRadius: 28, marginRight: 15 },
  hRight: { flex: 1 },
  name:   { fontSize: 19, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 2 },
  subtitle: { fontSize: 8, color: C.muted, marginBottom: 5 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 4 },
  cText: { fontSize: 7, color: C.muted, marginRight: 10 },
  cLink: { fontSize: 7, color: C.cyan,  marginRight: 10 },
  badgeRow: { flexDirection: "row" },
  badge: {
    fontSize: 6.5, fontFamily: "Helvetica-Bold", color: C.muted,
    backgroundColor: C.bg, borderRadius: 3,
    paddingHorizontal: 5, paddingVertical: 2, marginRight: 5,
  },

  // ── Divider ──────────────────────────────────────────────────────
  hr: {
    borderBottomWidth: 0.5, borderBottomColor: C.border,
    marginBottom: 10,
  },

  // ── Body columns ─────────────────────────────────────────────────
  body:  { flexDirection: "row" },
  left:  {
    width: "57%", paddingRight: 14,
    borderRightWidth: 0.5, borderRightColor: C.border,
  },
  right: { flex: 1, paddingLeft: 14 },

  // ── Section title ────────────────────────────────────────────────
  secTitle: {
    fontSize: 6, fontFamily: "Helvetica-Bold", color: C.cyan,
    letterSpacing: 1.2, marginBottom: 5, marginTop: 9,
  },
  secFirst: { marginTop: 0 },

  // ── Timeline ─────────────────────────────────────────────────────
  tlItem:    { marginBottom: 7 },
  tlHead:    { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  tlCompany: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: C.dark },
  tlPeriod:  { fontSize: 6.5, color: C.muted },
  tlRole:    { fontSize: 7.5, color: C.cyan, marginBottom: 2 },
  tlDesc:    { fontSize: 7, color: C.muted, lineHeight: 1.4 },

  // ── Certification ────────────────────────────────────────────────
  certRow:    { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  certName:   { fontSize: 8, fontFamily: "Helvetica-Bold", color: C.dark },
  certIssuer: { fontSize: 7, color: C.muted, marginTop: 1 },
  certScore:  {
    fontSize: 7, fontFamily: "Helvetica-Bold", color: C.cyan,
    backgroundColor: C.cyanBg, borderRadius: 3,
    paddingHorizontal: 5, paddingVertical: 2,
  },

  // ── Project ──────────────────────────────────────────────────────
  projItem:  { marginBottom: 6 },
  projHead:  { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 1 },
  projName:  { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: C.dark },
  projStack: { fontSize: 6.5, color: C.cyan, marginBottom: 2 },
  projDesc:  { fontSize: 7, color: C.muted, lineHeight: 1.4 },

  // ── Skills ───────────────────────────────────────────────────────
  skillGroup: { marginBottom: 4 },
  skillLabel: { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 1.5 },
  skillList:  { fontSize: 7, color: C.muted, lineHeight: 1.3 },

  // ── Languages ────────────────────────────────────────────────────
  langItem: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    paddingVertical: 3,
    borderBottomWidth: 0.5, borderBottomColor: C.border,
  },
  langName:  { fontSize: 8, fontFamily: "Helvetica-Bold", color: C.dark },
  langLevel: { fontSize: 7, color: C.muted },
});

const trunc = (str: string, max: number) =>
  str.length > max ? str.slice(0, max).trimEnd() + "…" : str;

const PDF_SKILLS = SKILL_GROUPS.filter(g => g.label !== "IAs");

interface Props { t: Messages; photoUrl: string }

export default function CVDocument({ t, photoUrl }: Props) {
  return (
    <Document>
      <Page size="A4" style={s.page}>

        {/* ── Header ── */}
        <View style={s.header}>
          <Image src={photoUrl} style={s.photo} />
          <View style={s.hRight}>
            <Text style={s.name}>{personal.name}</Text>
            <Text style={s.subtitle}>{t.hero.subtitle}</Text>
            <View style={s.contactRow}>
              <Text style={s.cText}>{personal.email}</Text>
              <Link src={personal.linkedin} style={s.cLink}>LinkedIn</Link>
              <Link src={personal.github}   style={s.cLink}>GitHub</Link>
            </View>
            <View style={s.badgeRow}>
              <Text style={s.badge}>BR  {t.hero.nationality}</Text>
              <Text style={s.badge}>{personal.age}</Text>
              <Text style={s.badge}>EU  {t.hero.citizenship}</Text>
            </View>
          </View>
        </View>

        <View style={s.hr} />

        {/* ── Body ── */}
        <View style={s.body}>

          {/* LEFT COLUMN */}
          <View style={s.left}>

            <Text style={[s.secTitle, s.secFirst]}>{t.sections.experience.toUpperCase()}</Text>
            {(["prognum", "uff"] as const).map(key => {
              const item = t.timeline.items[key];
              return (
                <View key={key} style={s.tlItem} wrap={false}>
                  <View style={s.tlHead}>
                    <Text style={s.tlCompany}>{companies[key]}</Text>
                    <Text style={s.tlPeriod}>{item.period}</Text>
                  </View>
                  <Text style={s.tlRole}>{item.role}</Text>
                  <Text style={s.tlDesc}>{trunc(item.description, 220)}</Text>
                </View>
              );
            })}

            <Text style={s.secTitle}>{t.sections.certifications.toUpperCase()}</Text>
            <View style={s.certRow} wrap={false}>
              <View>
                <Text style={s.certName}>{toefl.name}</Text>
                <Text style={s.certIssuer}>{toefl.issuer}</Text>
              </View>
              <Text style={s.certScore}>{toefl.score}</Text>
            </View>

            <Text style={s.secTitle}>{t.sections.projects.toUpperCase()}</Text>

            <View style={s.projItem} wrap={false}>
              <View style={s.projHead}>
                <Text style={s.projName}>HobbyMap</Text>
                <Text style={s.certScore}>Live</Text>
              </View>
              <Text style={s.projStack}>{hobbymap.stack.join(" · ")}</Text>
              <Text style={s.projDesc}>{trunc(t.projects.hobbymap.description, 200)}</Text>
            </View>

            <View style={s.projItem} wrap={false}>
              <Text style={s.projName}>Prognum</Text>
              <Text style={s.projDesc}>{trunc(t.projects.prognum.description, 180)}</Text>
            </View>

          </View>

          {/* RIGHT COLUMN */}
          <View style={s.right}>

            <Text style={[s.secTitle, s.secFirst]}>{t.sections.skills.toUpperCase()}</Text>
            {PDF_SKILLS.map(group => (
              <View key={group.label} style={s.skillGroup}>
                <Text style={s.skillLabel}>{group.label}</Text>
                <Text style={s.skillList}>{group.skills.map(sk => sk.name).join(", ")}</Text>
              </View>
            ))}

            <Text style={s.secTitle}>{t.sections.languages.toUpperCase()}</Text>
            {(["portuguese", "english", "spanish"] as const).map(key => {
              const lang = t.langs[key];
              return (
                <View key={key} style={s.langItem}>
                  <Text style={s.langName}>{lang.name}</Text>
                  <Text style={s.langLevel}>
                    {lang.level}{lang.note ? `  ·  ${lang.note}` : ""}
                  </Text>
                </View>
              );
            })}

          </View>
        </View>
      </Page>
    </Document>
  );
}
