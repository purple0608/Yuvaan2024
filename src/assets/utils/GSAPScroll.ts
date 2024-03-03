export function labelToScroll(timeline: GSAPTimeline, label: string) {
  if (timeline) {
    let st = timeline.scrollTrigger!;

    console.log(timeline.labels);
    return (
      st.start +
      (st.end - st.start) * (timeline.labels[label] / timeline.duration())
    );
  }
}
