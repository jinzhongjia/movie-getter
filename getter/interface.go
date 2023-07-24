package getter

type getter interface {
	JudgeGetting() bool
	ReGet()
	StartGet()
	StopGet()
	Rename()
}
