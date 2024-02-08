export function labelToScroll(timeline: GSAPTimeline, label: string) {
  let st = timeline.scrollTrigger!;
  return (
    st.start +
    (st.end - st.start) * (timeline.labels[label] / timeline.duration())
  );
}
